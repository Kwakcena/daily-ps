def solution(skill, skill_trees):
    return sum(
        [skillTreeWithValidSkill(skill, subtractSkill(skill, skill_tree))
         for skill_tree in skill_trees]
    )


def subtractSkill(skill, skill_tree):
    set_skill = set(skill)
    return ''.join([ch for ch in skill_tree if ch in set_skill])


def skillTreeWithValidSkill(skill, skill_tree):
    return skill.startswith(skill_tree)


def test_solution():
    assert solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]) == 2
    assert solution("CBD", ["CABDE", "CBADF", "AECB", "BDA"]) == 3


def test_del_other_skill():
    assert subtractSkill("CBD", "BACDE") == "BCD"
    assert subtractSkill("CBD", "CBADF") == "CBD"
    assert subtractSkill("CBD", "AECB") == "CB"
    assert subtractSkill("CBD", "BDA") == "BD"
    assert subtractSkill("CBD", "AF") == ""


def test_is_valid_skill_tree():
    assert skillTreeWithValidSkill("CBD", "BCD") is False
    assert skillTreeWithValidSkill("CBD", "CB") is True
    assert skillTreeWithValidSkill("CBD", "B") is False
    assert skillTreeWithValidSkill("CBD", "CBD") is True
    assert skillTreeWithValidSkill("CBD", "BD") is False
    assert skillTreeWithValidSkill("CBD", "") is True
    assert skillTreeWithValidSkill("ABC", "A") is True
    assert skillTreeWithValidSkill("ABC", "AB") is True
    assert skillTreeWithValidSkill("ABC", "ABC") is True
    assert skillTreeWithValidSkill("ABC", "B") is False
